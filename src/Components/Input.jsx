import React, { useRef } from 'react'

const Input = ({inputText, handleChange, handleClick}) => {
    const inputRef = useRef();
  return (
    <div>
        <form>
            <label for="skill">New Skill : </label>
            <input type='text' onChange={(e)=> handleChange(e)} value={inputText} autoFocus ref={inputRef} placeholder='Enter the skill' />
            <button type='submit' onClick={(e) => {
                e.preventDefault();
                inputRef.current.focus();
                handleClick();
            }
            }>ADD</button>
        </form>

    </div>
  )
}

export default Input