import Card from "@/components/card"

const data = [
    {
        title: "Gucci duffle bag",
        image: "/bestSellingProduct2.png",
        price: 960,
        id: 1
    },
    {
        title: "Small BookSelf",
        image: "/bestSellingProduct4.png",
        price: 360,
        id: 2
    },
    {
        title: "GP11 Shooter USB Gamepad",
        image: "/product6.png",
        price: 550,
        id: 3
    },
    {
        title: "Quilted Satin Jacket",
        image: "/product7.png",
        price: 750,
        id: 4
    }
]

const foryou = [
    {
        title: "ASUS FHD Gaming Laptop",
        image: "/product3.png",
        price: 960,
        id: 5
    },
    {
        title: "IPS LCD Gaming Monitor",
        image: "/flashSales3.png",
        price: 1160,
        id: 6
    },
    {
        title: "HAVIT HV-G92 Gamepad",
        image: "/flashSales1.png",
        price: 560,
        id: 7
    },
    {
        title: "AK-900 Wired Keyboard",
        image: "/flashSales2.png",
        price: 200,
        id: 8
    },
]

const WishList = () => {
    return (
        <div className="md:max-w-[1280px] w-full m-auto min-h-[80vh] py-10 p-3">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium">Whishlist ({data.length})</h3>
                <button className="xs:px-8 xs:py-3 px-6 py-2 border-[1px] font-medium xs:text-base text-sm rounded-sm border-zinc-500">Move All To Bag</button>
            </div>
            <div className="w-full flex flex-wrap sm:gap-6 gap-3 justify-center my-8">
                <Card arr={data} />
            </div>
            <div className="w-full flex justify-between items-center">
                <div className="w-full flex items-center gap-3">
                    <div className="w-5 h-10 bg-red-500 rounded-sm" />
                    <span className="text-base xs:text-xl">Just For You</span>
                </div>
                <button className="xs:px-10 xs:py-3 px-8 py-2 border-[1px] font-medium xs:text-base text-sm rounded-sm border-zinc-500 text-nowrap">See All</button>
            </div>
            <div className="w-full flex flex-wrap sm:gap-6 gap-3 justify-center my-8">
                <Card arr={foryou} />
            </div>
        </div>
    )
}

export default WishList