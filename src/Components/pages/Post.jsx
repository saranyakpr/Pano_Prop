function Post() {
  return (
    <section className="bg-[#f5f7fb] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 sm:pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="bg-blue-100 rounded-2xl px-6 sm:px-10 py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Text */}
          <div>
            <h2 className="text-lg sm:text-2xl font-bold text-gray-700 mb-1">
              Post your property for FREE
            </h2>
            <p className="text-sm sm:text-lg text-gray-500">
              List it on <span className="font-semibold tracking-wider text-gray-700">PANOPROP</span> and get genuine leads
            </p>
          </div>

          {/* Button */}
          <a
            href="#"
            className="shrink-0 px-7 py-2.5 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            List Property
          </a>
        </div>
      </div>
    </section>
  );
}

export default Post;
