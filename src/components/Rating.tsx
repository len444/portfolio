import { useState } from "react";
import '/src/rating.css';

function Rating() {
    const [selectedRating, setSelectedRating] = useState<number>();
    const [isSubmitted, setIsSubmitted] = useState(false)

    function handleRatingClicked(rating: number) {
        setSelectedRating(rating)
    }

    function handleFormSubmitted(e: React.FormEvent) {
        e.preventDefault
        setIsSubmitted(true)
    }

    function RatingMain() {
    
        return isSubmitted ? (

            <div className="thank-you-main">
                <img src="./src/assets/thumbsup.svg" />
                <p>You've selected {selectedRating} out of 5</p>
                <h1>Thank you!</h1>
                <p>We appreciate you taking the time to give a rating.
                    If you ever need more support, don't hesitate to get in touch!
                </p>
            </div>
        ) : (
            <form
                onSubmit={handleFormSubmitted}
                className="main"
            >
                <div className="star-btn">
                    <img className="star-svg" src="./src/assets/star.svg" />
                </div>
                <h2>How did we do?</h2>
                <p>Please let us know how we did with your support request.
                    All feedback is appreciated to help us improve our offering.
                </p>


                <div className="rating-btns">
                    {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                            type="button"
                            onClick={() => handleRatingClicked(rating)}
                            className="button">
                            {rating}
                        </button>
                    ))}
                </div>


                <div>
                    <button disabled={selectedRating === undefined} className="submit-button">SUBMIT</button>
                </div>


            </form>
        )
    } 
    return (
        <div className="main-wrapper">
            <RatingMain />
        </div>
    )
}
    
export default Rating