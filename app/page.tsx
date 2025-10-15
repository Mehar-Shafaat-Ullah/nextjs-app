/**
 * This is the main page component for the Next.js application (App Router).
 * This content will be deployed to S3 and served via the S3 endpoint URL.
 */

// Define the main component function
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
      
      {/* Main Heading */}
      <h1 className="text-6xl font-extrabold text-indigo-700 mb-4 tracking-tight sm:text-7xl">
        CI/CD Success!
      </h1>
      
      {/* Subtitle / Status Message */}
      <p className="text-xl text-gray-600 max-w-2xl mb-8">
        This page was automatically builtttt by **AWSAWS CodeBuild** and deployed to **Amazon S3** via **CodePipeline**.
      </p>
      
      {/* Instructions */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Pipeline Test Verified
        </h2>
        <ul className="text-left text-gray-500 space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Code change pushed to GitHub.
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            CodePipeline automatically triggered.
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Deployment to S3 successful.
          </li>
        </ul>
      </div>

      {/* Footer / Next Step Reminder */}
      <p className="mt-10 text-sm text-gray-400">
        Next Step: Implement CloudFront CDN.
      </p>
    </div>
  );
}