class Api::V1::IdeasController < ApplicationController
  respond_to :json


  def index
    respond_with Idea.all, location: nil
  end

  def show
    respond_with Idea.find(params[:id])
  end

  def create
    respond_with Idea.create(idea_params), location: nil
  end

  def update
    idea = Idea.find(params[:id])
    if idea.update(idea_params)
      respond_with(idea, status: 200, location: api_v1_idea_path(idea))
    else
      render json: idea.errors, status: 422
    end
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end
end
