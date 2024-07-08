import React from 'react'

const Todos = () => {
    return (
        <div className='w-full'>
            <div className='max-w-lg bg-gray-50 mx-auto p-3'>
                <h1 className='font-bold text-3xl'>December 1, 2023</h1>
                <p className='text-sm text-[#575757] font-semibold'>5 incomplete, 5 completed</p>
                <hr />


                {/* input field */}
                <div className='h-16 flex rounded-lg border-gray-200 border-2 mt-4 overflow-hidden'>
                    <input type="text" placeholder='Add a todo' className='h-full px-2 text-sm text-[$575757] bg-transparent outline-none w-9/12' />
                    <button className='bg-transparent font-semibold text-xl w-3/12'>Add</button>
                </div>

                {/* incomplete todo */}
                <div className='mb-10 mt-20'>
                    <h2 className='text-lg text-[#575757] font-bold'>Incomplete</h2>
                    <ul>
                        <li className='flex gap-x-3 justify-start items-center'>
                            <input type="checkbox" className="size-4 checked:marker:text-blue-500 rounded border-gray-300" />
                            <p className='text-lg text-[#575757]'>This is a todo text</p>
                        </li>
                    </ul>
                </div>

                {/* completed todo */}
                <div>
                    <h2>Incomplete</h2>
                    <ul>
                        <li className='flex gap-x-1 justify-start items-center'>
                            <input type="checkbox" className="size-4 checked:marker:text-blue-500 rounded border-gray-300" />
                            <p>This is a todo text</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Todos