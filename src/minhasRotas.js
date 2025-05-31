import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atv01 from "./Atv01";
import Atv02 from "./Atv02";
import Atv03 from "./Atv03";
import Atv04 from "./Atv04";
import Atv05 from "./Atv05";

import Toolbar from "./Toolbar";
import GalleryAtv4 from "./GalleryAtv4";
import Counter from "./Counter";
import Form from "./Form";
import MovingDot from "./MovingDot";
import Form2 from "./Form2";
import Form3 from "./Form3";
import List from "./List";
import List2 from "./List2";
import ShapeEditor from "./ShapeEditor";
import CounterList from "./CounterList";
import List3 from "./List3";
import List4 from "./List4";
import BucketList from "./BucketList";

import FormQuiz from "./FormQuiz";
import FormTicket from "./FormTicket";
import Accordion from "./Accordion";
import Messenger from "./Messenger";

export default function MinhasRotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/atv01" element={<Atv01 />}/>
                <Route path="/atv02" element={<Atv02 />}/>
                <Route path="/atv03" element={<Atv03 />}/>
                <Route path="/atv04" element={<Atv04 />}/>
                <Route path="/atv05" element={<Atv05 />}/>

                <Route path="/atv04/toolbar" element={<Toolbar />}/>
                <Route path="/atv04/gallery" element={<GalleryAtv4 />}/>
                <Route path="/atv04/counter" element={<Counter />}/>
                <Route path="/atv04/form" element={<Form />}/>
                <Route path="/atv04/moving-dot" element={<MovingDot />}/>
                <Route path="/atv04/form2" element={<Form2 />}/>
                <Route path="/atv04/form3" element={<Form3 />}/>
                <Route path="/atv04/list" element={<List />}/>
                <Route path="/atv04/list2" element={<List2 />}/>
                <Route path="/atv04/shape-editor" element={<ShapeEditor />}/>
                <Route path="/atv04/counter-list" element={<CounterList />}/>
                <Route path="/atv04/list3" element={<List3 />}/>
                <Route path="/atv04/list4" element={<List4 />}/>
                <Route path="/atv04/bucket-list" element={<BucketList />}/>
                
                <Route path="/atv05/form-quiz" element={<FormQuiz />}/>
                <Route path="/atv05/form-ticket" element={<FormTicket />}/>
                <Route path="/atv05/lab-eng-soft" element={<Accordion />}/>
                <Route path="/atv05/messenger" element={<Messenger />}/>
            </Routes>
        </BrowserRouter>
    );
}