require 'rails_helper'

RSpec.describe Idea, type: :model do

  let(:idea_one) {
    Idea.create(title: "Zipskee", body: "Travel App")
  }

  let(:idea_two) {
    Idea.create(title: "Build Stuff", body: "Buy it at Ikea")
  }

  it "is valid" do
    expect(idea_one).to be_valid
  end

  it "is invalid without a title" do
    idea_one.title = nil
    expect(idea_one).to be_invalid
  end

  it "is invalid without a body" do
    idea_one.body = nil
    expect(idea_one).to be_invalid
  end

  it "is invalid without a quality" do
    idea_one.quality = nil
    expect(idea_one).to be_invalid
  end
end
