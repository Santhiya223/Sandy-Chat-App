import React from 'react'

const GenderCheckbox = ({onCheckboxChanged, selectedCheckbox}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedCheckbox === "male" ? "selected" : ""}`}>
                <span className='label-text text-white'>Male</span>
                <input type="checkbox" className='checkbox border-slate-900'
                checked={selectedCheckbox ==="male"}
                onChange={()=> onCheckboxChanged("male")}/>
            </label>
        </div>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedCheckbox === "female" ? "selected" : ""}`}>
                <span className='label-text text-white'>Female</span>
                <input type="checkbox" className='checkbox border-slate-900'
                checked={selectedCheckbox ==="female"}
                onChange={()=> onCheckboxChanged("female")}/>
            </label>
        </div>
        <div></div>
    </div>
  )
}

export default GenderCheckbox

//STARTER CODE FOR THIS FILE

// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text text-white'>Male</span>
//                 <input type="checkbox" className='checkbox border-slate-900'/>
//             </label>
//         </div>
//         <div className='form-control'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text text-white'>Female</span>
//                 <input type="checkbox" className='checkbox border-slate-900'/>
//             </label>
//         </div>
//         <div></div>
//     </div>
//   )
// }

// export default GenderCheckbox