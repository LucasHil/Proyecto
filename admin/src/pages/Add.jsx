import axios, { formToJSON } from 'axios'
import React, { useState } from 'react'
import { assets } from '../assets/assets.js'
import {backendUrl} from '../App.jsx'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Casual');
  const [bestseller, setbestseller] = useState(false);
  const [sizes, setSizes] = useState([]);


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData()

      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))
      
      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData, {headers:{token}})
      
      if(response.data.success){
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      } else{
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }



  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3' action="">
      <div>
        <p className='mb-3'>
          Upload Image
        </p>

        <div className='flex gap-4'>
          <label className='border p-1 border-dashed rounded-md relative hover:scale-105 cursor-pointer' htmlFor="image1">
            <img className='w-10 ' src={!image1 ?  assets.upload : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file" name="" id="image1" hidden/>
            <div className='absolute bottom-0 right-0 bg-black  text-white rounded-full border w-4 h-4 flex items-center justify-center text-xs' >1</div>
          </label>
          <label className='border p-1 border-dashed rounded-md relative hover:scale-105 cursor-pointer' htmlFor="image2">
            <img className='w-10 ' src={!image2 ?  assets.upload : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file" name="" id="image2" hidden/>
            <div className='absolute bottom-0 right-0 bg-black  text-white rounded-full border w-4 h-4 flex items-center justify-center text-xs' >2</div>
          </label>
          <label className='border p-1 border-dashed rounded-md relative hover:scale-105 cursor-pointer' htmlFor="image3">
            <img className='w-10 ' src={!image3 ?  assets.upload : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e)=>setImage3(e.target.files[0])} type="file" name="" id="image3" hidden/>
            <div className='absolute bottom-0 right-0 bg-black  text-white rounded-full border w-4 h-4 flex items-center justify-center text-xs' >3</div>
          </label>
          <label className='border p-1 border-dashed rounded-md relative hover:scale-105 cursor-pointer' htmlFor="image4">
            <img className='w-10 ' src={!image4 ?  assets.upload : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type="file" name="" id="image4" hidden/>
            <div className='absolute bottom-0 right-0 bg-black  text-white rounded-full border w-4 h-4 flex items-center justify-center text-xs' >4</div>
          </label>
        </div>


      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full max-w-[500px] px-3 py-2 border border-gray-500 rounded-md' placeholder='Product type' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <input onChange={(e)=>setDescription(e.target.value)} value={description} type="text" className='w-full max-w-[500px] px-3 py-2 border border-gray-500 rounded-md' placeholder='Product description' required/>
      </div>

      <div className='flex flex-col sm:flex-row gap-4 w-full md:gap-8'>
        <div>
          <p className='mb-2'>Product category</p>
          <select onChange={(e)=>setCategory(e.target.value)} className='w-full px-3 py-2 border border-gray-500 rounded-md' name="" id="">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Sub category</p>
          <select onChange={(e)=>setSubCategory(e.target.value)} className='w-full px-3 py-2 border border-gray-500 rounded-md' name="" id="">
            <option value="Athletic">Athletic</option>
            <option value="Casual">Casual</option>
            <option value="Fashion">Fashion</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Product Price</p>
          <input onChange={(e)=> setPrice(e.target.value)} value={price} type="Number" placeholder='1000' className='border border-gray-500 rounded-md px-1 h-10 py-2 sm:w-[120px]'/>
        </div>

      </div>

      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='grid grid-cols-4 gap-3 sm:grid-cols-5'>

          <div onClick={()=>setSizes(prev=>prev.includes("35")? prev.filter(item=>item !== "35") : [...prev, "35"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("35") ? "bg-black text-white " : "bg-slate-200"}`}>35</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("35.5")? prev.filter(item=>item !== "35.5") : [...prev, "35.5"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("35.5") ? "bg-black text-white " : "bg-slate-200"}`}>35.5</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("36")? prev.filter(item=>item !== "36") : [...prev, "36"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("36") ? "bg-black text-white " : "bg-slate-200"}`}>36</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("36.5")? prev.filter(item=>item !== "36.5") : [...prev, "36.5"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("36.5") ? "bg-black text-white " : "bg-slate-200"}`}>36.5</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("37")? prev.filter(item=>item !== "37") : [...prev, "37"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("37") ? "bg-black text-white " : "bg-slate-200"}`}>37</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("37.5")? prev.filter(item=>item !== "37.5") : [...prev, "37.5"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("37.5") ? "bg-black text-white " : "bg-slate-200"}`}>37.5</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("38")? prev.filter(item=>item !== "38") : [...prev, "38"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("38") ? "bg-black text-white " : "bg-slate-200"}`}>38</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("38.5")? prev.filter(item=>item !== "38.5") : [...prev, "38.5"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("38.5") ? "bg-black text-white " : "bg-slate-200"}`}>38.5</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("39")? prev.filter(item=>item !== "39") : [...prev, "39"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("39") ? "bg-black text-white " : "bg-slate-200"}`}>39</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("39.5")? prev.filter(item=>item !== "39.5") : [...prev, "39.5"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("39.5") ? "bg-black text-white " : "bg-slate-200"}`}>39.5</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("40")? prev.filter(item=>item !== "40") : [...prev, "40"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("40") ? "bg-black text-white " : "bg-slate-200"}`}>40</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("40.5")? prev.filter(item=>item !== "40.5") : [...prev, "40.5"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("40.5") ? "bg-black text-white " : "bg-slate-200"}`}>40.5</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("41")? prev.filter(item=>item !== "41") : [...prev, "41"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("41") ? "bg-black text-white " : "bg-slate-200"}`}>41</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("41.5")? prev.filter(item=>item !== "41.5") : [...prev, "41.5"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("41.5") ? "bg-black text-white " : "bg-slate-200"}`}>41.5</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("42")? prev.filter(item=>item !== "42") : [...prev, "42"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("42") ? "bg-black text-white " : "bg-slate-200"}`}>42</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("42.5")? prev.filter(item=>item !== "42.5") : [...prev, "42.5"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("42.5") ? "bg-black text-white " : "bg-slate-200"}`}>42.5</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("43")? prev.filter(item=>item !== "43") : [...prev, "43"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("43") ? "bg-black text-white " : "bg-slate-200"}`}>43</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("43.5")? prev.filter(item=>item !== "43.5") : [...prev, "43.5"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("43.5") ? "bg-black text-white " : "bg-slate-200"}`}>43.5</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("44")? prev.filter(item=>item !== "44") : [...prev, "44"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("44") ? "bg-black text-white " : "bg-slate-200"}`}>44</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("44.5")? prev.filter(item=>item !== "44.5") : [...prev, "44.5"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("44.5") ? "bg-black text-white " : "bg-slate-200"}`}>44.5</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("45")? prev.filter(item=>item !== "45") : [...prev, "45"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("45") ? "bg-black text-white " : "bg-slate-200"}`}>45</p>
          </div>

          <div onClick={()=>setSizes(prev=>prev.includes("45.5")? prev.filter(item=>item !== "45.5") : [...prev, "45.5"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("45.5") ? "bg-black text-white " : "bg-slate-200"}`}>45.5</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("46")? prev.filter(item=>item !== "46") : [...prev, "46"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("46") ? "bg-black text-white " : "bg-slate-200"}`}>46</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("46.5")? prev.filter(item=>item !== "46.5") : [...prev, "46.5"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("46.5") ? "bg-black text-white " : "bg-slate-200"}`}>46.5</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("47")? prev.filter(item=>item !== "47") : [...prev, "47"])}>
            <p className={`px-3 py-1 cursor-pointer text-center ${sizes.includes("47") ? "bg-black text-white " : "bg-slate-200"}`}>47</p>
          </div>

        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={()=> setbestseller(prev=> !prev)} checked={bestseller} type="checkbox" id="bestseller" className='accent-black cursor-pointer'/>
        <label htmlFor="bestseller" className='cursor-pointer'>Add to Bestseller</label>
      </div>

      <button type='submit' className='bg-black w-28 text-white font-medium rounded-full mt-4 h-10 cursor-pointer'>ADD</button>

    </form>
  )
}

export default Add