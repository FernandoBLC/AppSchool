import { Inter } from 'next/font/google'
import store from '../store/store'
import { Provider } from 'react-redux'
import HomeScreen from '../appComponents/home/HomeScreen'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </>
  )
}
