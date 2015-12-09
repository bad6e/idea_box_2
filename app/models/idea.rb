class Idea < ActiveRecord::Base
  validates :title, presence: true
  validates :body, presence: true
  validates :quality, presence: true
  validates :quality, inclusion: { in: %w(swill plausible genius),
    message: "%{value} is a not a valid quality!"}
end
