// React is made up of components.
// This is the main App Component.

import Header from "./components/Header"
import FeedbackLists from "./components/FeedbackLists"
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {FeedbackProvider} from './context/FeedbackContext'


function App() {   
    return (
    <FeedbackProvider>
    <Header />
    <div className="container">
    <FeedbackForm  />
    <FeedbackStats />
    <FeedbackLists/>
    </div>
    </FeedbackProvider>
    )
   
    
}

export default App;