10.times do
  Idea.create(
    title: Faker::Company.catch_phrase,
    body: Faker::Lorem.paragraph(5))
end