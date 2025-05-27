import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atv01 from "./Atv01";
import Atv02 from "./Atv02";
import Atv03 from "./Atv03";
import Atv04 from "./Atv04";

import Toolbar from "./Toolbar";
import GalleryAtv4 from "./GalleryAtv4";
import Counter from "./Counter";
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

export default function MinhasRotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/atv01" element={<Atv01 />}/>
                <Route path="/atv02" element={<Atv02 />}/>
                <Route path="/atv03" element={<Atv03 />}/>
                <Route path="/atv04" element={<Atv04 />}/>

                <Route path="/atv4/toolbar" element={<Toolbar />}/>
                <Route path="/gallery" element={<GalleryAtv4 />}/>
                <Route path="/counter" element={<Counter />}/>
                <Route path="/moving-dot" element={<MovingDot />}/>
                <Route path="/form2" element={<Form2 />}/>
                <Route path="/form3" element={<Form3 />}/>
                <Route path="/list" element={<List />}/>
                <Route path="/list2" element={<List2 />}/>
                <Route path="/shape-editor" element={<ShapeEditor />}/>
                <Route path="/counter-list" element={<CounterList />}/>
                <Route path="/list3" element={<List3 />}/>
                <Route path="/list4" element={<List4 />}/>
                <Route path="/bucket-list" element={<BucketList />}/>
                
            </Routes>
        </BrowserRouter>
    );
}