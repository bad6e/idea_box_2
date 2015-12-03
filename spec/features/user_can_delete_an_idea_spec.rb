require 'rails_helper'

feature "User Delete", js: true do

  scenario "user can delete ideas" do
    idea_one   = Idea.create(title: 'A', body: 'B')
    idea_two   = Idea.create(title: 'C', body: 'D')
    idea_three = Idea.create(title: 'E', body: 'F')
    visit root_path

    within(".idea-id-#{idea_one.id}") do
      click_on "Delete"
    end

    expect(page).to_not have_content('A1')
    expect(page).to_not have_content('B1')
  end
end