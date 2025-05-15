'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

type Card = {
  _id: string;
  name: string;
  address: string;
  pin: string;
  phone: string;
};

const AllCards = () => {
  const [cardData, setCardData] = useState<Card[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  const [formState, setFormState] = useState({
    name: '',
    address: '',
    pin: '',
    phone: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/allcards`);
      setCardData(res.data.CARDDATA);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  const handleEditClick = (card: Card) => {
    setEditId(card._id);
    setFormState({
      name: card.name,
      address: card.address,
      pin: card.pin,
      phone: card.phone,
    });
  };

  const handleSaveClick = async (id: string) => {
    try {
      const res = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/updatecard/${id}`, formState);
      alert(res.data.mssg);
      setEditId(null);
      fetchData();
    } catch (err) {
      console.error('Error updating card:', err);
    }
  };

  const handleDeleteClick = async (id: string) => {
    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/deletecard/${id}`);
      alert(res.data.mssg);
      fetchData();
    } catch (err) {
      console.error('Error deleting card:', err);
    }
  };

  return (
    <div className='bg-[#161B22] h-screen w-screen'>
        <div style={{ padding: "2%"}} className=" bg-[#161B22]" >
        {/* <Navabar shownav={shownav} setshownav={setshownav} name={name}  ></Navabar> */}
        <div className="flex w-full" > 
        <div className="w-[50%] text-2xl font-extrabold" >
            <h1 className="text-white" >Forms Page</h1>
        </div>
        <div className="w-[50%] flex items-center justify-end gap-3" >
            <button className="border rounded px-4 bg-white"
            onClick={() => {
                
            }} >VIEW FORMS</button>
        </div>
        </div> 
    </div>

    <div className="min-h-screen py-10 px-4 ">
      <h1 className="text-3xl font-bold text-center mb-8"></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {cardData.map((card) => (
          <div key={card._id} className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-2 text-lg">
              {editId !== card._id ? (
                <>
                  <p><strong>Name:</strong> {card.name}</p>
                  <p><strong>Address:</strong> {card.address}</p>
                  <p><strong>PIN:</strong> {card.pin}</p>
                  <p><strong>Phone:</strong> {card.phone}</p>
                </>
              ) : (
                <>
                  <input
                    className="w-full border p-2 rounded mb-2"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Name"
                  />
                  <input
                    className="w-full border p-2 rounded mb-2"
                    value={formState.address}
                    onChange={(e) => setFormState({ ...formState, address: e.target.value })}
                    placeholder="Address"
                  />
                  <input
                    className="w-full border p-2 rounded mb-2"
                    value={formState.pin}
                    onChange={(e) => setFormState({ ...formState, pin: e.target.value })}
                    placeholder="PIN"
                  />
                  <input
                    className="w-full border p-2 rounded"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="Phone"
                  />
                </>
              )}
            </div>

            <div className="flex justify-between mt-4">
              {editId !== card._id ? (
                <button
                  onClick={() => handleEditClick(card)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Edit
                </button>
              ) : (
                <button
                  onClick={() => handleSaveClick(card._id)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Save
                </button>
              )}
              <button
                onClick={() => handleDeleteClick(card._id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
  );
};

export default AllCards;