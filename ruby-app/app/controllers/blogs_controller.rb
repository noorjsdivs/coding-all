class BlogsController < ApplicationController
  def index
    @posts = BlogPost.all
  end

  def show
    @post = BlogPost.find_by_slug(params[:slug])
    
    if @post
      @related_posts = BlogPost.related_posts(@post.slug, @post.category)
    else
      redirect_to blog_path, alert: "Blog post not found"
    end
  end
end
