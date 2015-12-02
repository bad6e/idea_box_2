class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.all, location: nil
  end

  def create
    respond_with Idea.create(idea_params), location: nil
  end

  def update
    @idea = Idea.find(params[:id])
    @updated_idea = @idea.update(idea_params)
    respond_with do |format|
      format.json { render(json: Idea.find(params[:id]), status: 200) }
    end
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body)
  end
end
