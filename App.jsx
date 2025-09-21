const { useState, useCallback, useEffect } = React;

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-gray-700 mb-4">Error: {this.state.error?.message}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Helper Components
const LoadingSpinner = () => (
  <div className="flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    <span className="ml-2">Analyzing...</span>
  </div>
);

// Export Functions
const exportToJSON = (data, filename) => {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

const exportToCSV = (data, filename) => {
  const csvContent = [
    ['Field', 'Value'],
    ['Rating', data.rating],
    ['Summary', data.summary],
    ['Experience', data.experience || 'N/A'],
    ['Education', data.education || 'N/A'],
    ['Highlights', data.highlights?.join('; ') || 'N/A'],
    ['Skills', data.skills?.join('; ') || 'N/A'],
    ['Suggestions', data.suggestions?.join('; ') || 'N/A'],
    ['Strengths', data.strengths?.join('; ') || 'N/A'],
    ['Weaknesses', data.weaknesses?.join('; ') || 'N/A']
  ].map(row => row.map(field => `"${field}"`).join(',')).join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

const printResults = () => {
  window.print();
};

const ProgressBar = ({ value, max = 10 }) => (
  <div className="w-full bg-gray-200 rounded-full h-4">
    <div 
      className="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-500"
      style={{ width: `${(value / max) * 100}%` }}
    ></div>
    <p className="text-right font-semibold text-blue-600 mt-1">{value} / {max}</p>
  </div>
);

const SkillBadge = ({ skill }) => (
  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2 mb-2">
    {skill}
  </span>
);

const JobCard = ({ title, matchScore }) => (
  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-gray-200 card-hover">
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <span className={`text-sm font-bold px-3 py-1 rounded-full ${
        matchScore >= 80 ? 'bg-green-100 text-green-800' :
        matchScore >= 60 ? 'bg-yellow-100 text-yellow-800' :
        'bg-red-100 text-red-800'
      }`}>
        {matchScore}% Match
      </span>
    </div>
  </div>
);

const Section = ({ title, icon, children, className = "" }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md card-hover ${className}`}>
    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
      {icon && <i className={`${icon} mr-2 text-blue-500`}></i>}
      {title}
    </h2>
    {children}
  </div>
);

// Main App Component
function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobMatch, setJobMatch] = useState(null);
  const [activeTab, setActiveTab] = useState('analysis');
  const [dragOver, setDragOver] = useState(false);

  // Health check on component mount
  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => console.log('Server health:', data))
      .catch(err => console.error('Server health check failed:', err));
  }, []);

  const handleFileChange = (file) => {
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setFileName(file.name);
      setError('');
      setAnalysisResult(null);
    } else {
      setSelectedFile(null);
      setFileName('');
      setError('Please select a valid PDF file.');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFileChange(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const analyzeResume = useCallback(async () => {
    if (!selectedFile) {
      setError('Please select a file first.');
      return;
    }

    setIsLoading(true);
    setError('');
    setAnalysisResult(null);

    const formData = new FormData();
    formData.append('resumeFile', selectedFile);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAnalysisResult(data);
      setActiveTab('analysis');

    } catch (err) {
      console.error('Analysis failed:', err);
      setError(err.message || 'Analysis failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [selectedFile]);

  const matchJob = useCallback(async () => {
    if (!jobDescription || !analysisResult) {
      setError('Please provide job description and analyze resume first.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/match-job', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobDescription,
          resumeText: 'Resume analyzed'
        }),
      });

      if (!response.ok) {
        throw new Error('Job matching failed');
      }

      const data = await response.json();
      setJobMatch(data);
      setActiveTab('jobMatch');

    } catch (err) {
      console.error('Job matching failed:', err);
      setError(err.message || 'Job matching failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [jobDescription, analysisResult]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="gradient-bg text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              <i className="fas fa-robot mr-3"></i>
              AI Resume Analyzer
            </h1>
            <p className="text-xl opacity-90">Get instant AI-powered feedback on your resume</p>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          {/* Upload Section */}
          <div className="max-w-2xl mx-auto mb-8 no-print">
            <Section title="Upload Resume" icon="fas fa-upload">
              <div 
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <i className="fas fa-file-pdf text-4xl text-red-500 mb-4"></i>
                <p className="text-gray-600 mb-4">
                  {fileName || 'Drag & drop your PDF resume here or click to browse'}
                </p>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e.target.files[0])}
                  className="hidden"
                  id="file-input"
                />
                <label
                  htmlFor="file-input"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
                >
                  Choose PDF File
                </label>
              </div>
              
              {selectedFile && (
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={analyzeResume}
                    disabled={isLoading}
                    className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center"
                  >
                    {isLoading ? <LoadingSpinner /> : (
                      <>
                        <i className="fas fa-brain mr-2"></i>
                        Analyze Resume
                      </>
                    )}
                  </button>
                </div>
              )}
              
              {error && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  {error}
                </div>
              )}
            </Section>
          </div>

          {/* Results Section */}
          {analysisResult && (
            <>
              {/* Tabs and Export Options */}
              <div className="max-w-6xl mx-auto mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex flex-wrap justify-center space-x-1 bg-white p-1 rounded-lg shadow-md">
                    <button
                      onClick={() => setActiveTab('analysis')}
                      className={`px-6 py-2 rounded-md font-medium transition-colors ${
                        activeTab === 'analysis' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <i className="fas fa-chart-line mr-2"></i>Analysis
                    </button>
                    <button
                      onClick={() => setActiveTab('jobMatch')}
                      className={`px-6 py-2 rounded-md font-medium transition-colors ${
                        activeTab === 'jobMatch' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <i className="fas fa-briefcase mr-2"></i>Job Match
                    </button>
                  </div>
                  
                  {/* Export Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => exportToJSON(analysisResult, `resume-analysis-${new Date().toISOString().split('T')[0]}.json`)}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm"
                      title="Export as JSON"
                    >
                      <i className="fas fa-download mr-1"></i>JSON
                    </button>
                    <button
                      onClick={() => exportToCSV(analysisResult, `resume-analysis-${new Date().toISOString().split('T')[0]}.csv`)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                      title="Export as CSV"
                    >
                      <i className="fas fa-table mr-1"></i>CSV
                    </button>
                    <button
                      onClick={printResults}
                      className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors text-sm"
                      title="Print Results"
                    >
                      <i className="fas fa-print mr-1"></i>Print
                    </button>
                  </div>
                </div>
              </div>

              {/* Analysis Tab */}
              {activeTab === 'analysis' && (
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <Section title="Resume Rating" icon="fas fa-star">
                      <ProgressBar value={analysisResult.rating} />
                      <p className="text-gray-600 mt-2">
                        {analysisResult.rating >= 8 ? 'Excellent resume!' :
                         analysisResult.rating >= 6 ? 'Good resume with room for improvement' :
                         'Needs significant improvement'}
                      </p>
                    </Section>

                    <Section title="Professional Summary" icon="fas fa-user-tie">
                      <p className="text-gray-700 italic leading-relaxed">
                        "{analysisResult.summary}"
                      </p>
                    </Section>

                    <Section title="Key Highlights" icon="fas fa-lightbulb">
                      <div className="space-y-2">
                        {analysisResult.highlights?.map((highlight, index) => (
                          <div key={index} className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </Section>

                    {analysisResult.skills && (
                      <Section title="Skills" icon="fas fa-cogs">
                        <div className="flex flex-wrap">
                          {analysisResult.skills.map((skill, index) => (
                            <SkillBadge key={index} skill={skill} />
                          ))}
                        </div>
                      </Section>
                    )}
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <Section title="Improvement Suggestions" icon="fas fa-arrow-up">
                      <div className="space-y-3">
                        {analysisResult.suggestions?.map((suggestion, index) => (
                          <div key={index} className="flex items-start">
                            <i className="fas fa-arrow-right text-blue-500 mr-2 mt-1"></i>
                            <span className="text-gray-700">{suggestion}</span>
                          </div>
                        ))}
                      </div>
                    </Section>

                    <Section title="Career Path Suggestions" icon="fas fa-road">
                      <div className="space-y-3">
                        {analysisResult.jobTitleSuggestions?.map((job, index) => (
                          <JobCard key={index} title={job.title} matchScore={job.matchScore} />
                        ))}
                      </div>
                    </Section>

                    {analysisResult.strengths && (
                      <Section title="Strengths" icon="fas fa-thumbs-up">
                        <div className="space-y-2">
                          {analysisResult.strengths.map((strength, index) => (
                            <div key={index} className="flex items-start">
                              <i className="fas fa-plus-circle text-green-500 mr-2 mt-1"></i>
                              <span className="text-gray-700">{strength}</span>
                            </div>
                          ))}
                        </div>
                      </Section>
                    )}

                    {analysisResult.experience && (
                      <Section title="Experience Level" icon="fas fa-briefcase">
                        <p className="text-gray-700">{analysisResult.experience}</p>
                      </Section>
                    )}
                  </div>
                </div>
              )}

              {/* Job Match Tab */}
              {activeTab === 'jobMatch' && (
                <div className="max-w-4xl mx-auto">
                  <Section title="Job Description Matching" icon="fas fa-search">
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Paste Job Description:
                      </label>
                      <textarea
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows="6"
                        placeholder="Paste the job description here to see how well your resume matches..."
                      />
                      <button
                        onClick={matchJob}
                        disabled={isLoading || !jobDescription}
                        className="mt-3 bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 disabled:bg-gray-400"
                      >
                        {isLoading ? <LoadingSpinner /> : 'Match Job Requirements'}
                      </button>
                    </div>

                    {jobMatch && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-green-800 mb-2">
                            <i className="fas fa-check mr-2"></i>Matched Skills
                          </h3>
                          <div className="space-y-1">
                            {jobMatch.matchedSkills?.map((skill, index) => (
                              <span key={index} className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded mr-1 mb-1">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-red-800 mb-2">
                            <i className="fas fa-times mr-2"></i>Missing Skills
                          </h3>
                          <div className="space-y-1">
                            {jobMatch.missingSkills?.map((skill, index) => (
                              <span key={index} className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded mr-1 mb-1">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-blue-800 mb-2">
                            <i className="fas fa-lightbulb mr-2"></i>Recommendations
                          </h3>
                          <ul className="space-y-2">
                            {jobMatch.recommendations?.map((rec, index) => (
                              <li key={index} className="flex items-start">
                                <i className="fas fa-arrow-right text-blue-500 mr-2 mt-1"></i>
                                <span className="text-gray-700">{rec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="md:col-span-2 text-center">
                          <div className="inline-block bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Overall Match Score</h3>
                            <div className="text-4xl font-bold text-blue-600">{jobMatch.matchScore}%</div>
                            <ProgressBar value={jobMatch.matchScore} max={100} />
                          </div>
                        </div>
                      </div>
                    )}
                  </Section>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 mt-12 no-print">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 AI Resume Analyzer. made with ❤️</p>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

// Make App available globally
window.App = App;