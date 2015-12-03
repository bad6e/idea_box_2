require 'rails_helper'

feature "User Change Quality", js: true do

  scenario "user can change thumbs up of ideas" do
    idea_one   = Idea.create(title: 'A', body: 'B')

    visit root_path

    within(".idea-id-#{idea_one.id}") do
      click_on "Thumbs Up"
    end

    expect(page).to have_content('plausible')
    expect(page).to_not have_content('swill')
  end

  scenario "user can change thumbs down of ideas" do
    idea_one   = Idea.create(title: 'A', body: 'B', quality: 'genius')

    visit root_path

    within(".idea-id-#{idea_one.id}") do
      click_on "Thumbs Down"
    end

    expect(page).to have_content('plausible')
    expect(page).to_not have_content('genius')
  end

  scenario "user can't change thumbs down of when idea is at swill" do
    idea_one   = Idea.create(title: 'A', body: 'B', quality: 'swill')

    visit root_path

    within(".idea-id-#{idea_one.id}") do
      click_on "Thumbs Down"
    end

    expect(page).to have_content('swill')
    expect(page).to_not have_content('plausible')
    expect(page).to_not have_content('genius')
  end

  scenario "user can't change thumbs up when idea is at genius" do
    idea_one   = Idea.create(title: 'A', body: 'B', quality: 'genius')

    visit root_path

    within(".idea-id-#{idea_one.id}") do
      click_on "Thumbs Up"
    end

    expect(page).to have_content('genius')
    expect(page).to_not have_content('plausible')
    expect(page).to_not have_content('swill')
  end
end