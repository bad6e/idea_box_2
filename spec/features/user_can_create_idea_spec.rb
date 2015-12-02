require 'rails_helper'

feature "User", js: true do

  scenario "user can create ideas" do
    visit root_path

    fill_in "idea-title", with: "A"
    fill_in "idea-body", with: "C"

    click_on "Save"
    expect(page).to have_content('A')
    expect(page).to have_content('C')
    expect(page).to have_content('swill')
  end
end
