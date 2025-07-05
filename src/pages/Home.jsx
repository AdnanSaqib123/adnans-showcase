function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Adnan's Showcase</h1>
      <p className="text-lg text-gray-600 mb-4">
        This is a showcase of my work and projects. Explore the different sections to learn more about what I do.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">About Me</h3>
          <p className="text-gray-600">Learn about my background, skills, and experience.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Projects</h3>
          <p className="text-gray-600">View my portfolio of projects and work samples.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p className="text-gray-600">Get in touch with me for collaborations or inquiries.</p>
        </div>
      </div>
    </div>
  )
}

export default Home 