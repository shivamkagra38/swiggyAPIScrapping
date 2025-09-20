export function Contact() {
  return (

    <div className="flex items-center h-[70vh]">

      <div className="w-[100%]">

      <div className="font-bold text-center mt-4">
        Contact us page
      </div>

      <form className="text-center">
        <input type="text" placeholder="Your name..." className="bg-pink-100 p-3 mt-4 w-[50%]"></input><br></br>
        <input type="text" placeholder="Your E-mail..." className="bg-pink-100 p-3 mt-4 w-[50%]"></input><br></br>
        <input type="text" placeholder="Your Message..."className="bg-pink-100 p-3 mt-4 w-[50%]"></input><br></br>
        <button className="bg-pink-700 text-white w-[50%] p-3 mt-4 ">Submit</button>
      </form>

      </div>

    </div>
    
  );
}

export default Contact;
