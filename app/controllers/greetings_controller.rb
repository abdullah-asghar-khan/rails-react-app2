class GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all
    @greeting = @greetings.sample

    respond_to do |format|      
      format.json { render json: @greeting }
    end
  end
end
