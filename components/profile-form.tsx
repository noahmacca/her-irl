export default function ProfileForm() {
  return (
    <div className="bg-white">
      <form className="space-y-6 bg-white rounded px-4 py-6 sm:p-6 lg:p-8 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <div className="text-gray-700 text-lg font-semibold mb-1">
              Challenges
            </div>
            <div className="flex flex-col space-y-1">
              {[
                { id: 'challenge-1', title: '30 Days of Code' },
                { id: 'challenge-2', title: '100 Days of Design' },
                { id: 'challenge-3', title: 'Data Structures and Algorithms' }
              ].map(challenge => (
                <div
                  key={challenge.id}
                  className="flex justify-between border border-gray-400 px-2 py-1 rounded text-sm"
                >
                  <span className="text-gray-700">{challenge.title}</span>
                  <div className="text-gray-700 hover:text-gray-900 cursor-pointer w-6 text-center text-md">
                    &times;
                  </div>
                </div>
              ))}
            </div>
            <input
              type="text"
              className="mt-1 block w-full rounded border border-gray-400 shadow-sm px-2 py-1 text-sm"
              placeholder="Add new challenge..."
            />
          </label>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 border rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
