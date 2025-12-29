class HomeController < ApplicationController
  def index
    @latest_posts = BlogPost.all.take(6)
  end
end
