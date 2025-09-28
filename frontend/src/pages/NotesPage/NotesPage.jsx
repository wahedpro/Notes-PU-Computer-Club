import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const NotesPage = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [updateOpen, setUpdateOpen] = useState(false); 
  const [notes, setNotes] = useState([]); 
  const [currentNote, setCurrentNote] = useState(null); 

  const { user } = useContext(AuthContext);

  // Fetch all notes from backend
  const fetchNotes = () => {
    fetch("http://localhost:5000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Add a new note
  const addNotes = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const email = user.email;

    const notesInfo = { email, title, description };

    fetch("http://localhost:5000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notesInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setIsOpen(false); 
          fetchNotes(); 
        }
      });
  };

  // Delete a note
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/notes/${id}`, {
      method: "DELETE",
    }).then(() => fetchNotes());
  };

  // Open update modal and set the current note
  const openUpdateModal = (note) => {
    setCurrentNote(note);
    setUpdateOpen(true);
  };

  // Update a note
  const handleUpdate = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;

    fetch(`http://localhost:5000/notes/${currentNote._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    }).then(() => {
      setUpdateOpen(false); 
      fetchNotes();
    });
  };

  return (
    <div className="py-5">
      {/* Header */}
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <h3 className="text-xl font-semibold">Your All Notes</h3>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Note
        </button>
      </div>

      {/* Notes list */}
      <div className="w-[90%] mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {notes
          .filter((note) => note.email === user.email) // Show only my notes
          .map((note) => (
            <div
              key={note._id}
              className="bg-white border rounded-2xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg"
            >
              <div>
                <h1 className="text-xl font-semibold mb-2">{note.title}</h1>
                <p className="text-gray-600">{note.description}</p>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => openUpdateModal(note)}
                  className="px-4 py-2 text-sm rounded-lg bg-yellow-400 text-white hover:bg-yellow-500"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(note._id)}
                  className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Add Note Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
            <h2 className="text-lg font-bold mb-4">Add a New Note</h2>
            <form onSubmit={addNotes}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="w-full border rounded-lg p-2 mb-4"
                required
              />
              <textarea
                name="description"
                placeholder="Write your note here..."
                className="w-full border rounded-lg p-2 mb-4"
                rows="4"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Update Note Modal */}
      {updateOpen && currentNote && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
            <h2 className="text-lg font-bold mb-4">Update Note</h2>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                name="title"
                defaultValue={currentNote.title}
                placeholder="Title"
                className="w-full border rounded-lg p-2 mb-4"
                required
              />
              <textarea
                name="description"
                defaultValue={currentNote.description}
                placeholder="Write your note here..."
                className="w-full border rounded-lg p-2 mb-4"
                rows="4"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setUpdateOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-yellow-400 text-white hover:bg-yellow-500"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesPage;