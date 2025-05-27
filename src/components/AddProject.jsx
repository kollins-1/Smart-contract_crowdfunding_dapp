import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalState, setGlobalState } from "../store/index";
import { toast } from 'react-toastify';
import { createProject } from "../services/blockchain";

const AddProject = () => {
  const [createModal] = useGlobalState('createModal' /* name of the state */);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const [date, setDate] = useState('');
  const [imageURL, setImageURL] = useState('');

  const toTimestamp = (dateStr) => {
    const dateObj = Date.parse(dateStr);
    return dateObj / 1000;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !cost || !date || !imageURL) return;

    const params = {
      title,
      description,
      cost,
      expiresAt: toTimestamp(date),
      imageURL,
    };

    await createProject(params);
    toast.success('Project created successfully, will reflect in 30 seconds');
    onClose();
  };

  const onClose = () => {
    setGlobalState('createModal', 'scale-0');
    reset();
  };

  const reset = () => {
    setTitle('');
    setCost('');
    setDescription('');
    setImageURL('');
    setDate('');
  };

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-55 transform transition-transform duration-300 ${createModal}`}>
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Add Project</p>
            <button type="button" className="border-0 bg-transparent focus:outline-none" onClick={onClose}>
              <FaTimes />
            </button>
          </div>

          <div className="flex justify-center items-center mt-3">
            <div className="rounded-xl overflow-hidden h-20 w-20">
              <img src={imageURL || "https://th.bing.com/th/id/OIP.gemr1GnYzxh1rXnTT84lFgHaEK?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} alt="project title" className="h-full w-full object-cover cursor-pointer" />
            </div>
          </div>

          <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-4">
            <input className="block w-full bg-transparent border-0 text-sm font-semibold text-slate-500 focus:outline-none focus:ring-0 ml-3 mr-1 my-2" type="text"
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-4">
            <input className="block w-full bg-transparent border-0 text-sm font-semibold text-slate-500 focus:outline-none focus:ring-0 ml-3 mr-1 my-2" type="number"
              step={0.01}
              min={0.01}
              name="amount"
              placeholder="Amount (ETH)"
              onChange={(e) => setCost(e.target.value)}
              value={cost}
              required
            />
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-4">
            <input className="block w-full bg-transparent border-0 text-sm font-semibold text-slate-500 focus:outline-none focus:ring-0 ml-3 mr-1 my-2" type="date"
              name="date"
              placeholder="Expires"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              required
            />
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-4">
            <input className="block w-full bg-transparent border-0 text-sm font-semibold text-slate-500 focus:outline-none focus:ring-0 ml-3 mr-1 my-2" type="url"
              name="imageURL"
              placeholder="Image URL"
              onChange={(e) => setImageURL(e.target.value)}
              value={imageURL}
              required
            />
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-4">
            <textarea className="block w-full bg-transparent border-0 text-sm font-semibold text-slate-500 focus:outline-none focus:ring-0 ml-3 mr-1 my-2"
              name="description"
              placeholder="Project Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
          </div>
          <button type="submit" className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-md leading-tight uppercase rounded-full shadow-md hover:bg-green-400 mt-6">
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProject;
