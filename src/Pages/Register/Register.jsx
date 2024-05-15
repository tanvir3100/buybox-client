import { useForm } from "react-hook-form"

export default function App() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }


    console.log(watch("example")) // watch input value by passing the name of it


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <iframe width="300px"
                            height="300px"
                            src="https://lottie.host/embed/e86a4f6e-468c-44ea-94d7-ab9b300c0681/hU1HKiRfcj.json"></iframe>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-700 mt-2'>This field is required</span>}
                            </div>
                            {/* include validation with required or other standard HTML validation rules */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-red-700 mt-2'>This field is required</span>}
                            </div>
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}
                            <div className="text-center mt-5 w-full">
                                <input className="btn bg-red-500 text-white w-full" type="submit" />
                            </div>
                        </form>
                        <div className="mt-5">
                            <button className="btn w-full bg-teal-500 text-black">
                                google
                            </button>
                            <div className="flex justify-between mt-5">
                                <button className="btn bg-[#0866ff] text-white">
                                    facebook
                                </button>
                                <button className="btn bg-[#ea455f] text-white">
                                    Instagram
                                </button>
                                <button className="btn bg-black text-white">
                                    github
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}







