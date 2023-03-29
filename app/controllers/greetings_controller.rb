class GreetingsController < ApplicationController
  def index
    # @contents = Content.all
    # @rand_num = rand(1...@contents.length)
    # render json: @contents[@rand_num], status: 🆗
    @greetings = Greeting.all
    @greeting = @greetings.sample

    respond_to do |format|
      format.json { render json: @greeting, status: :ok }
    end
  end
end
