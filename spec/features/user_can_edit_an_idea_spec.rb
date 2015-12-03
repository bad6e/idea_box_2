require 'rails_helper'

feature "User Edit", js: true do

  scenario "user can edit ideas" do
    idea_one   = Idea.create(title: 'A', body: 'B')
    idea_two   = Idea.create(title: 'C', body: 'D')
    idea_three = Idea.create(title: 'E', body: 'F')
    visit root_path

    within(".idea-id-#{idea_one.id}") do
      click_on "Edit"
    end

    fill_in "idea-title-edit-#{idea_one.id}", with: "A1"
    fill_in "idea-body-edit-#{idea_one.id}", with: "B1"

    within(".edit-form-#{idea_one.id}") do
      click_on "Save"
    end

    expect(page).to have_content('A1')
    expect(page).to have_content('B1')
    expect(page).to have_content('swill')
  end
end