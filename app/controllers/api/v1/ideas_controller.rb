class Api::V1::IdeasController < ApplicationController
  respond_to :json


  def index
    respond_with Idea.all, location: nil
  end

  def show
    respond_with Idea.find(params[:id])
  end

  def create
    idea = Idea.new(idea_params)
    if idea.save
      respond_with(idea, status: 201, location: api_v1_idea_path(idea))
    else
      render json: {errors: idea.errors}, status: 422, location: api_v1_ideas_path
    end
  end

  def update
    idea = Idea.find(params[:id])
    if idea.update(idea_params)
      respond_with do |format|
        format.json { render(json: Idea.find(params[:id]), status: 201) }
      end
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
