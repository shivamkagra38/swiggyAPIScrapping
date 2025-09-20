import { useDispatch } from 'react-redux';
import { addItems } from '../utils/cartSlice.js';

const Accordian = (props) => {

    const {info,showItems, setIdx, i} = props;

    //const[showItems, setShowItems] = useState(false);

    const accordianClickHandler = () => {

        if(showItems==true)
        {
            setIdx(-1);
            return;
        }
        setIdx(i);
        console.log("Clicked");

    }

    //redux
    const dispatch = useDispatch();

    const addHandler = (food) => {
        dispatch(addItems(food));
    }


  return (

    <div className="accordian mb-3 w-6/12 mx-auto shadow-md bg-gray-50">

        <div className="accordian-header  p-4 flex justify-between cursor-pointer" onClick={accordianClickHandler}>
            <span className="font-semibold">{info.card.card.title} ({info.card.card.itemCards.length})</span>
            <span>▼</span>
        </div>

        {showItems == true ?  <div className="accordian-body">

            <div className="text-left">
                {
                    info.card.card.itemCards.map((i,key)=>{

                        return (

                            <div className="px-4 py-2 flex justify-between items-center border-b-2 border-gray-300" key={key}>

                                <div>
                                    <span>{i.card.info.name}</span>
                                    <span> -₹{i.card.info.price/100}</span>
                                    <p className="text-gray-400 text-sm">{i.card.info.description}</p>
                                </div>

                                <div>
                                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+i.card.info.imageId} className="w-[200px] h-auto"></img>
                                    <button className="w-[100%] bg-pink-100" onClick={()=>{addHandler(i)}}>Add +</button>
                                </div>                                
                               
                            </div>

                        )

                    })
                }
            </div>

        </div>:"" }
       

    </div>

  );

}

export default Accordian;
