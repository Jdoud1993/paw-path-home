Pet.create(
    name: "unknown",
    species: "Dog",
    breed: "Labrador Retriever",
    sex: "Male",
    lost_or_found: "Found",
    phone_number: "(661) 547-5376",
    image: "https://cdn.britannica.com/82/232782-050-8062ACFA/Black-labrador-retriever-dog.jpg",
    user_id: 1
)

Pet.create(
    name: "Onyxia",
    species: "Dog",
    breed: "Cocker Spaniel",
    sex: "Female",
    lost_or_found: "Lost",
    phone_number: "(661) 547-5376",
    image: "https://media.graphassets.com/output=format:webp/s2ZowyyR9ms6ZCampxVA",
    user_id: 1
)

Pet.create(
    name: "Chidori",
    species: "Cat",
    breed: "Siamese",
    sex: "Male",
    lost_or_found: "Found",
    phone_number: "(661) 618-2173",
    image: "https://moderncat.com/wp-content/uploads/2013/10/bigstock-Siamese-Cat-With-Blue-Eye-Sitt-468429261-1024x683.jpg",
    user_id: 2
)

Pet.create(
    name: "Opal",
    species: "Dog",
    breed: "Dachshund",
    sex: "Female",
    lost_or_found: "Lost",
    phone_number: "(661) 618-2173",
    image: "https://www.dachshundsdaily.com/wp-content/uploads/2022/07/How-To-Tell-If-A-Dachshund-Puppy-Is-Long-Haired-1.jpg",
    user_id: 2
)

Comment.create(
    body: "I think this pet was last seen by the Walmart on 60th Street West.",
    user_id: 1,
    pet_id: 4
)

Comment.create(
    body: "Thank you. I will be posting fliers in that area today.",
    user_id: 2,
    pet_id: 4
)

Comment.create(
    body: "This sweet kitty was found on Elm Street and Rancho Vista Boulevard.",
    user_id: 2,
    pet_id: 2 
)

puts "✅ Done seeding!"
