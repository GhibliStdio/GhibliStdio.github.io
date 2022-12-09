import logo from './logo.svg';
import './App.css';
import pepe from './assets/pepe.jpg'

function App() {
    return (
        <div className="flex flex-col container mx-auto p-4 items-center justify-center pt-20">
            <img className="rounded-lg overflow-hidden max-w-[200px]" src={pepe} />
            <h1 className="text-3xl font-bold mb-4">My name is CHUNG</h1>
            <p className="text-gray-600 mb-4">I love pizza and other things lmaoooo</p>
            <ul className="list-none">
                <li className="inline-block bg-gray-200 rounded-full px-3 py-1 mr-2 font-semibold text-gray-700">
                    shy
                </li>
                <li className="inline-block bg-gray-200 rounded-full px-3 py-1 mr-2 font-semibold text-gray-700">
                    stupid
                </li>
                <li className="inline-block bg-gray-200 rounded-full px-3 py-1 mr-2 font-semibold text-gray-700">
                    loving
                </li>
                <li className="inline-block bg-gray-200 rounded-full px-3 py-1 mr-2 font-semibold text-gray-700">
                    smart
                </li>
            </ul>
        </div>
    )
}

export default App;
