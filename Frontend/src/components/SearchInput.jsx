import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../zustand/useConversation';
import useGetConversations from '../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversation } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    } 

    // Check if conversations is defined and has elements before using find
    const conversations = conversation?.find((c) => 
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversations) {
      setSelectedConversation(conversations);
      setSearch("");
    } else {
      toast.error("No such user found!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
      <input 
        type="text" 
        placeholder='Search...' 
        className='input input-bordered rounded-full'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchSharp className='w-6 h-6 outline-none'/>
      </button>
    </form>
  );
};

export default SearchInput;
