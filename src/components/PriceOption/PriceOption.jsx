import Price from "../Price/Price";

const PriceOption = () => {

    [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$29.99/month",
            "features": [
                "Access to gym facilities",
                "Cardio and strength equipment",
                "Locker room access",
                "Free fitness assessment"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": "$49.99/month",
            "features": [
                "All features of Basic Membership",
                "Group fitness classes",
                "Personal training session (1/month)",
                "Sauna and steam room access"
            ]
        },
        {
            "id": 3,
            "name": "Family Membership",
            "price": "$89.99/month",
            "features": [
                "All features of Premium Membership",
                "Access for spouse and children",
                "Childcare services",
                "Discounts on merchandise"
            ]
        }
    ]



    return (
        <div>
            <Price></Price>
        </div>
    );
};

export default PriceOption;