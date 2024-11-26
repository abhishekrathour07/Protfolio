import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'sonner';

const Connect: React.FC = () => {
    const LoginSchema = yup.object().shape({
        name: yup.string().min(5, 'Minimum character should be 8').required('Name is required'),
        email: yup.string().email().required('Name is required'),
        content: yup.string().min(12, 'Message must be at least 12 characters').required('Message is required'),
    });

    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            content: "",
        },
        resolver: yupResolver(LoginSchema),
    });

    const onsubmit = async (data: any) => {
        const url = "https://api.web3forms.com/submit";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                access_key: "4ca157b1-ff8b-47ad-a552-040e75dc694b",
                name: data.name,
                email: data.email,
                content: data.content,
            }),
        });

        if (response.ok) {
            toast.success("Message Send Successfully")
            form.reset();
        } else {
            toast.error("Failed to send the message");
        }
    };

    return (
        <div className="h-[80vh] md:h-[60vh] flex justify-center mt-12 mx-6 ">
            <div className="bg-[#9694FF] md:w-[70vw] md:h-[55vh] lg:w-[60vw] items-center rounded-lg flex flex-col md:flex-row">
                <div className="bg-[#231d1d] rounded-lg md:rounded-tr-3xl rounded-br-[4rem] h-44 md:h-full md:w-[40%] flex flex-col justify-center gap-2 p-7 text-white">
                    <h2 className="space-x-1 text-4xl">Contact</h2>
                    <p className="h-2 w-12 bg-slate-600 rounded-2xl mr-16"></p>
                    <p className="text-lg">Any questions or remarks? Just write me a message :)</p>
                </div>
                <Form {...form}>
                    <div className="px-8 py-4 w-full">
                        <FormField
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <input
                                            {...field}
                                            className="mt-6 w-full px-3 py-3 border rounded-2xl text-sm focus:outline-none bg-[#f1f0e8be] text-black"
                                            placeholder="Enter your name"
                                            type="text"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs text-red-600 mt-1" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl className="mt-4">
                                        <input
                                            {...field}
                                            className="mt-6 w-full px-3 py-3 border rounded-2xl text-sm focus:outline-none bg-[#f1f0e8be] text-black"
                                            placeholder="Enter your email"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs text-red-600 mt-1" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="content"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl className="mt-4">
                                        <textarea
                                            {...field}
                                            className="w-full px-3 py-4 border rounded-2xl text-sm focus:outline-none bg-[#f1f0e8be] text-black"
                                            placeholder="Enter your message"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs text-red-600 mt-1" />
                                </FormItem>
                            )}
                        />
                        <button
                            type="button"
                            className="px-5 py-2 border-2 rounded-3xl mt-3 hover:bg-[#f1f0e878] text-white"
                            onClick={form.handleSubmit(onsubmit)}
                        >
                            SEND
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Connect;

