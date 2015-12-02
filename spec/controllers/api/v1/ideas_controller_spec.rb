require 'rails_helper'

RSpec.describe Api::V1::IdeasController, type: :controller do
  before(:each) do
    @idea_one   = Idea.create(title: "A",
                              body: "A1")

    @idea_two   = Idea.create(title: "B",
                              body: "B1")

    @idea_three = Idea.create(title: "C",
                              body: "C1")

    @idea_four  = Idea.create(title: "D",
                              body: "D1")
  end

  describe "GET /api/v1/ideas/" do

    it "gets an individual idea on the idea list" do
      get :index ,format: :json
      expect(response_data.first['title']).to eq(@idea_one.title)
    end

    it "gets all the ideas on the ideas list" do
      get :index ,format: :json
      expect(response_data.count).to eq(4)
    end
  end

  describe "DELETE /api/v1/ideas/:id" do

    it "deletes an idea on the idea list" do
      delete :destroy, id: @idea_one.id ,format: :json
      assert_response :success
      get :index ,format: :json
      expect(response_data.count).to eq(3)
    end
  end

  describe "POST /api/v1/ideas/" do

    it "creates an idea on the idea list" do
      post :create, idea: { title: "E", body: "E1" }, format: :json
      assert_response :success
      get :index ,format: :json
      expect(response_data.count).to eq(5)
    end
  end
end

