import React from "react";
import {BiSupport, BiWorld} from 'react-icons/bi'

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 py-16">
      <div className="lg:col-span-2 flex-col justify-evenly ">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p>
            Come experience the very pinnace of luxury Carribean all-inclusive
            vacations for couples of Beaches Resorts. Our luxury beach Resorts,
            set along the most gorgeous Bahamas, Grenada, Barbados and Curacao,
            feature unlimited gourmet dinning, unique bars serving premium
            liquors and wines, and every land and water sport including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. if you are planning a wedding, BEACHES is
            the leader in Carribean desiation weddings and honeymoon packages
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center ">
            <button><BiSupport className="icon" /></button>{" "}
            <div>
              {" "}
              <h3 className="py-2">LEADING SERVICE </h3>
              <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center ">
            <button><BiWorld className="icon" /></button>
            <div>
              <h3 className="py-2">AUTOMATED BOOKING</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center ">
          <p className="pt-2">GET ADDITION 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form>
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Grande Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-4">Rate & Availablities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
