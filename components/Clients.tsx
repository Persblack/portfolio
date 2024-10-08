import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import {companies, testimonials} from "@/data";
import {img} from "framer-motion/m";

const Clients = () => {
    return (
        <div>
            <div className="py-20" id="testimonials">
                <h1 className="heading">
                    Kind words from {' '}
                    <span className="text-purple">satisfied clients</span>
                </h1>
                <div className=" lex flex-col items-center max-lg:mt-10">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                        {companies.map(({id, img, name, nameImg}) => (
                            <div key={id} className="flex max-w-32 md:max-w-60 gap-2">
                                <img
                                    src={img}
                                    alt={name}
                                    className="md:w-10 w-5"
                                />
                                <img
                                    src={nameImg}
                                    alt={name}
                                    className="md:w-24 w-20"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients;