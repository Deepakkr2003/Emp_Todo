import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import TodoList from './components/TodoList';
import EmployeeList from './components/EmployeeList';

const App = () => {
  return (
    <Router>
      <div className="p-4 bg-gray-100 min-h-screen">
      <nav className="flex justify-center gap-8 mb-8">
  <NavLink 
    to="/todolist" 
    className="text-green-500 bg-amber-100 p-4 rounded-lg  hover:text-green-700 font-bold text-2xl hover:scale-110 hover:underline transition-all duration-300"
  >
    Todo List
  </NavLink>
  <NavLink 
    to="/employeelist" 
    className="text-green-500 bg-amber-100 p-4 rounded-lg   hover:text-green-700 font-bold text-2xl  hover:scale-110 hover:underline transition-all duration-300"
  >
    Employee List
  </NavLink>
</nav>




        <Routes>
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/employeelist" element={<EmployeeList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;