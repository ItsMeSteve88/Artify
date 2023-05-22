import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import artifycolor from '../assets/images/artifycolor.png'
import { getRandomPrompt } from '../utils'
import { FormField, Loader } from '../components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CreatePost = () =>
{
  const toastSuccess = () => toast.success("Image shared successfully!");
  const toastPrompt = () => toast.warn("Please enter a prompt");
  const toastError = () => toast.error("Something went wrong");
  const toastAlert = () => toast.info("Please generate an image with proper details");
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  })
  const [generatingImg, setGeneratingImg] = useState(false)
  const [loading, setLoading] = useState(false)

  const generateImage = async () =>
  {
    if (form.prompt)
    {
      try {
        setGeneratingImg(true)
        const response = await fetch('http://localhost:8080/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({prompt: form.prompt})
        })

        const data = await response.json()
        setForm({...form, photo: `data:image/jpeg;base64,${data.photo}`})
      } catch (err) {
        toastError(err);
      } finally
      {
        setGeneratingImg(false)
      }
    } else
    {
      toastPrompt()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form }),
        });

        await response.json();
        toastSuccess();
        navigate('/');
      } catch (err) {
        toastError(err);
      } finally {
        setLoading(false);
      }
    } else {
      toastAlert('Please generate an image with proper details');
    }
  };
  
  const handleChange = (e) =>
  {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handleSurpriseMe = () =>
  {
    const randomPrompt = getRandomPrompt(form.prompt)
    setForm({...form, prompt: randomPrompt})
  }
  

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-bold text-Aprimary text-[32px] font-raleway">
          Create
        </h1>
        <p className="mt-2 text-Aprimary text-[16-px] font-rosario">
          Create imaginatve and visually stunning images
          generated by DALL-E AI and share them with the community. <br/>Want to go home? Click the icon on the top left of the screen.
        </p>
      </div>
      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField
            LabelName='Name'
            type='text'
            name='name'
            placeholder='Give us a name'
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            LabelName='Prompt'
            type='text'
            name='prompt'
            placeholder='A photo of a Samoyed dog with its tongue out hugging a white Siamese cat'
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className='relative bg-Abackground text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 h-64 p-3 flex items-center justify-center'>
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className='w-full h-full object-contain'
              />
            ) : (
              <img
                src={artifycolor}
                alt='Artify'
                className='w-10/12 h-10/12 object-contain opacity-40'
            
            />
            )}
            {generatingImg && 
              <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]'>
                <Loader />
            </div>
            }
          </div>
        </div>
        <div className='mt-5 flex gap-5'>
          <button
            type='button'
            onClick={generateImage}
            className='text-Abackground bg-Asecondary font-medium rounded-md text-sm w-full sm:w-auto px-6 py-4 text-center hover:bg-Aaccent transition duration-300 ease-in-out'
          >
            {generatingImg ? 'Generating image...' : 'Generate'}
          </button>

        </div>
        <div className='mt-10'>
          <p className='mt-2 text-bOlive text-[14px]'>Once you have created the image you want, you can share it with others in the community.</p>
          <button
            type='submit'
            className=' mt-10 font-medium rounded-md text-sm w-full sm:w-auto px-6 py-4 text-center bg-green-500 text-Abackground hover:bg-green-400 transition duration-300 ease-in-out'
          >
            {loading ? 'Sharing...' : 'Share with the community'}
          </button>
        </div>
      </form>
      <ToastContainer theme='colored'/>
    </section>
  );
}

export default CreatePost