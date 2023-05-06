import React from 'react';

export default function LoginButton() {
  return (
    <div className="flex gap-3">
      <input
        type="text"
        placeholder="enter username"
        className="border border-black w-full p-3 rounded-md"
      />
      <button className="bg-black text-white  p-3 rounded-md cursor-pointer w-1/4">
        Login
      </button>
    </div>
  );
}
