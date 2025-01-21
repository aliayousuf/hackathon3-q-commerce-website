export default function ContactForm(){
    return(
            
            <main className="px-4">
                <form className="py-4 mt-4 border-t flex flex-col gap-5 max-w-lg mx-auto mb-20 ">
                    <div className="flex flex-col gap-2 text-black">
                       <label htmlFor="fullname">Full Name:</label>
                       <input 
                       type="text" 
                       id="fullname" 
                       placeholder=" Enter Your Name" 
                       className="w-full p-2 border rounded-md" required/>
                    </div>
    
                    <div className="flex flex-col gap-2 text-black">
                        <label htmlFor="email">Email:</label>
                        <input 
                        type="email" 
                        id="email" 
                        placeholder= "Enter Your Email"
                        className="w-full p-2 border rounded-md" required/>
                    </div>
                        
                    <div className="flex flex-col gap-2 text-black">
                       <label htmlFor="message"> Your Message:</label>
                       <textarea 
                       className="shadow-md px-6 py-2 border border-slate-300 h-32 rounded-md" 
                       id="message" 
                       placeholder="Type Your Message Here..." required>
                       </textarea>
                    </div>
                    <button 
                    className="bg-amber-500 p-3 text-white font-bold w-full md:w-auto" 
                    type="submit">Send</button>
                </form>
                </main>
                )
                }
                