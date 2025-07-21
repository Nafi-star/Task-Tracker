import React, { useState } from 'react';

type Task = {
  title: string;
  description: string;
  completed: boolean;
};

function App() {
  const [page, setPage] = useState<'home' | 'tasks' | 'about'>('home');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      setTasks([...tasks, { title, description, completed: false }]);
      setTitle('');
      setDescription('');
    }
  };

  const toggleTask = (idx: number) => {
    setTasks(tasks =>
      tasks.map((task, i) =>
        i === idx ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (idx: number) => {
    setTasks(tasks => tasks.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-100">
      <div className="w-full max-w-xl bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 mt-8 border border-white/40">
        <nav className="mb-8 flex gap-4 justify-center">
          {['home', 'tasks', 'about'].map((p) => (
            <button
              key={p}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 shadow-sm
                ${page === p
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-105 shadow-lg'
                  : 'bg-white/60 text-blue-700 hover:bg-blue-100 hover:scale-105'
                }`}
              onClick={() => setPage(p as typeof page)}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </nav>

        {page === 'home' && (
          <section className="text-center animate-fadeIn">
            <h1 className="text-4xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-lg">
              Welcome to Task Tracker!
            </h1>
            <p className="text-lg text-gray-700 mb-2">Track your tasks, mark them as done, and stay organized.</p>
            <p className="text-sm text-gray-400">Switch to <span className="font-semibold text-blue-500">Tasks</span> to get started.</p>
          </section>
        )}

        {page === 'tasks' && (
          <section className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Your Tasks</h2>
            {tasks.length === 0 ? (
              <p className="mb-6 text-gray-400 text-center italic">No tasks yet. Add your first task below!</p>
            ) : (
              <ul className="mb-6 space-y-3">
                {tasks.map((task, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center justify-between p-4 rounded-xl shadow-md transition-all duration-200 border
                      ${task.completed ? 'bg-green-100 border-green-300' : 'bg-white/80 border-blue-100 hover:shadow-lg'}
                      animate-slideIn`}
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(idx)}
                        className="mr-3 accent-blue-500 w-5 h-5 transition-all duration-150"
                      />
                      <span className={task.completed ? 'line-through text-gray-400' : 'text-gray-800'}>
                        <strong>{task.title}</strong>: {task.description}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteTask(idx)}
                      className="ml-4 text-red-500 hover:text-red-700 hover:underline text-sm transition"
                      title="Delete Task"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <form onSubmit={handleAddTask} className="flex flex-col gap-3 bg-gradient-to-br from-blue-50 to-purple-100 p-6 rounded-xl shadow-inner border border-blue-100">
              <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                required
              />
              <textarea
                placeholder="Task Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 rounded-full shadow-md transition-all duration-200"
              >
                Add Task
              </button>
            </form>
          </section>
        )}

        {page === 'about' && (
          <section className="text-center animate-fadeIn">
            <h2 className="text-2xl font-bold mb-2 text-blue-700">About</h2>
            <p className="text-gray-700 mb-2">
              This is a <span className="font-semibold text-blue-500">simple task tracker app</span> built with React and Vite.<br />
              You can add, complete, and delete tasks. Try it out!
            </p>
            <p className="text-xs text-gray-400">Styled with <span className="font-semibold text-purple-500">Tailwind CSS</span>.</p>
          </section>
        )}
      </div>
      {/* Animations */}
      <style>
        {`
          .animate-fadeIn { animation: fadeIn 0.7s; }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: none; } }
          .animate-slideIn { animation: slideIn 0.5s; }
          @keyframes slideIn { from { opacity: 0; transform: translateX(-30px);} to { opacity: 1; transform: none; } }
        `}
      </style>
    </div>
  );
}

export default App;
