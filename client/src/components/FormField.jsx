/* eslint-disable react/prop-types */
import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-900"
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-Asecondary py-4 px-6 rounded-[5px] text-Abackground mb-3 hover:bg-Aaccent transition duration-300 ease-in-out"
        >
          Surprise me
        </button>
      )}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-white border border-Aaccent text-Aprimary text-sm rounded-lg focus:ring-Aaccent focus:border-Aaccent outline-none block w-full p-4"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;