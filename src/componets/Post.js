import React from 'react'


function post({user,content}) {
  return (
    <div>
          <div className="flex justify-center">
            <a href="#" class="block p-7 text-left mb-4 w-96 bg-white rounded-2xl  shadow-md   dark:border-neutral-900 dark:bg-neutral-900">
                <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {user}
                </h5>
                <p class="font-medium text-gray-700  dark:text-white">
                 {content}
                </p>
            </a>
          </div>
        

    </div>
  )
}

export default post