"use client "
import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import axios from 'axios';

const CreateBlog = () => {
  const [title, setTitle] = useState('uuuuu');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const [content, setContent] = useState('jjjjjj');
  const [id, setId] = useState({}); // Add the id state
  const [successMessage, setSuccessMessage] = useState('');

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const { data } = await axios.post("/upload", formData);
      setId({
        id: data.public_id,
      });
      setUploading(false);
      // console.log(data.public_id);
    } catch (err) {
      console.error('Error uploading image:', err);
      setUploading(false);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const public_id = id.id;
      const { data } = await axios.post("/create-blog", {
        public_id,
        title,
        content,
        category,
      });
      setSuccessMessage("Blog created successfully!"); // Set success message

    } catch (err) {
      console.error("Error:", err);
    }
    // Add logic to send data to your backend or perform other actions
  };

  return (
    <div>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Content:</label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <label>Category:</label>
      <select value={category} onChange={handleCategoryChange}>
        <option value="" disabled>Select a category</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
        <option value="category4">Category 4</option>
        <option value="category5">Category 5</option>
      </select>
      <label>Image:</label>
      <input type="file" onChange={handleImageChange}
      />

      <button onClick={handleSubmit}
        disabled={!id.id && id.id !== 0}

      >Submit</button>
      {successMessage && <p>{successMessage}</p>}

    </div>
  );
};
export default CreateBlog