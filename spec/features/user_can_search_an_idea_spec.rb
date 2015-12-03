require 'rails_helper'

feature "User Search", js: true do

  scenario "user can search ideas based on title" do
    idea_one   = Idea.create(title: 'Z', body: 'Z1')
    idea_two   = Idea.create(title: 'X', body: 'X1')
    idea_three = Idea.create(title: 'Q', body: 'Q1')
    visit root_path

    within("#search-bar") do
      fill_in "filter", with: "Z"
    end

    expect(page).to have_content('Z')
    expect(page).to have_content('Z1')
    expect(page).to_not have_content('X')
    expect(page).to_not have_content('Q')
    expect(page).to_not have_content('X1')
    expect(page).to_not have_content('Q1')
  end

  scenario "user can search ideas based on body" do
    idea_one   = Idea.create(title: 'Z', body: 'Z1')
    idea_two   = Idea.create(title: 'X', body: 'X1')
    idea_three = Idea.create(title: 'Q', body: 'Q1')
    visit root_path

    within("#search-bar") do
      fill_in "filter", with: "Z1"
    end

    expect(page).to have_content('Z')
    expect(page).to have_content('Z1')
    expect(page).to_not have_content('X')
    expect(page).to_not have_content('Q')
    expect(page).to_not have_content('X1')
    expect(page).to_not have_content('Q1')
  end

  scenario "user can search ideas based on title lowercase" do
    idea_one   = Idea.create(title: 'Z', body: 'Z1')
    idea_two   = Idea.create(title: 'X', body: 'X1')
    idea_three = Idea.create(title: 'Q', body: 'Q1')
    visit root_path

    within("#search-bar") do
      fill_in "filter", with: "z"
    end

    expect(page).to have_content('Z')
    expect(page).to have_content('Z1')
    expect(page).to_not have_content('X')
    expect(page).to_not have_content('Q')
    expect(page).to_not have_content('X1')
    expect(page).to_not have_content('Q1')
  end

  scenario "user can search ideas based on body lowercase" do
    idea_one   = Idea.create(title: 'Z', body: 'Z1')
    idea_two   = Idea.create(title: 'X', body: 'X1')
    idea_three = Idea.create(title: 'Q', body: 'Q1')
    visit root_path

    within("#search-bar") do
      fill_in "filter", with: "z1"
    end

    expect(page).to have_content('Z')
    expect(page).to have_content('Z1')
    expect(page).to_not have_content('X')
    expect(page).to_not have_content('Q')
    expect(page).to_not have_content('X1')
    expect(page).to_not have_content('Q1')
  end
end