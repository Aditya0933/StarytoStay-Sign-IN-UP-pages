
export default function UserProfileCard() {
    return (        
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[500px]">
            <a href="#">
                <img class="rounded-t-lg" src="https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy </h5>
                </a>
                <span>Icon</span>
                <p class="mb-6 mt-6 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" class="inline-flex items-center px-4 py-3 text-sm font-large text-center text-white bg-blue-700 rounded-[50px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Adopt Me
                </a>
            </div>
        </div>    
    )
}


